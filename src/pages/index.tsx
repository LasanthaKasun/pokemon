import MainNav from "@/components/MainNav/MainNav";
import ResponsiveGrid from "@/components/ResponsiveGrid/ResponsiveGrid";
import Spaces from "@/components/Spaces/Spaces";
import TextField from "@/components/TextField/TextField";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vidzing Front-end test</title>
        <meta
          name="description"
          content="Small test for front-end developers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ResponsiveGrid>
          <MainNav
            title="Pokemon Game"
            subTitle="Select and build your favorite pokmon team"
          />
          <TextField
            label="Search pokmon"
            value="abc"
            onHandleChanges={(e) => console.log(e.target.value)}
          />
        </ResponsiveGrid>
        <Spaces />
        <ResponsiveGrid>Pockmon List</ResponsiveGrid>
      </main>
    </>
  );
}
