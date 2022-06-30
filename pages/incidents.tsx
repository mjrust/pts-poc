import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

interface IncidentsList {
  id: number;
  message?: object;
  externalId?: string;
  affectsAll: boolean;
  isCore: boolean;
  additionalInformation?: string;
  serviceKeys?: [string];
  instanceKeys?: [string];
  incidentImpacts?: [object?];
  incidentEvents?: [object?];
  createdAt: string;
  updatedAt: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const endpoint = 'https://trust1-acquisitions.herokuapp.com/v1/incidents/';
  const data = await fetch(endpoint);
  const incidents: IncidentsList[] = await data.json();

  return { props: { incidents } };
};

function Incidents({
  incidents,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Incidents</title>
      </Head>
      <nav className='slds-col'>
        <ul>
          <li>
            <Link href='/'>
              <a>Back</a>
            </Link>
          </li>
        </ul>
      </nav>

      <main className='slds-col slds-card slds-p-around--xx-large'>
        {incidents.map((incident) => (
          <p key={incident.id}>{incident.id}</p>
        ))}
      </main>
    </>
  );
}

export default Incidents;
