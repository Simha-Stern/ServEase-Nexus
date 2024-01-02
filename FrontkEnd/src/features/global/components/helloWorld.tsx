import { useState } from 'react';

function HelloWorld(): JSX.Element {
  const [data, setData] = useState<string>('1-2-3');
  const serverPort = Number(import.meta.env.VITE_SERVER_PORT);


    const fetchData = async () => {
      console.log(serverPort, typeof(serverPort));
      
      try {
        const response = await fetch(`http://localhost:${serverPort}`);
        console.log(response);
        const result = await response.text();
        console.log(result);
        if (data === '1-2-3' || data === "third time ice cream"){
          setData(result);
        }else if (data === result){
          setData("Don't believe it works?");
        }else{
          setData("third time ice cream");
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  return (
    <>
    <button onClick={fetchData}>try me...</button>
      <p>{data}</p>
      <p>shimi lousinh +12 </p>
    </>
  );
}

export default HelloWorld;
