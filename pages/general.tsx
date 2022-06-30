import { useEffect, useState } from 'react';

export default function General() {
  const [generalMessages, setGeneralMessages] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getGenMsgs = async () => {
      setLoading(true);
      const endpoint =
        'https://trust1-acquisitions.herokuapp.com/v1/generalMessages/';
      const res = await fetch(endpoint);
      const generalMessages = await res.json();
      setGeneralMessages(generalMessages);
      setLoading(false);
    };

    getGenMsgs().catch(console.error);
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (!generalMessages) return <p>No general messages data</p>;

  {
    return generalMessages.map((msg) => {
      return (
        <div key={msg.id} className='slds-m-around--large'>
          <h1 className='slds-text-heading--large slds-p-vertical--small'>
            {msg.subject}
          </h1>
          <p className='slds-p-vertical--xx-small'>{msg.body}</p>
        </div>
      );
    });
  }
}
