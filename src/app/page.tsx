import { ContainerPaises } from "./_components/ContainerPaises";

export default async function Home() {

  const response = await fetch("https://restcountries.com/v3.1/all ")
  const data = await response.json();

  return (
    <div>
      <main>
        <ContainerPaises data={data}></ContainerPaises>
      </main>
    </div>
  );
}
