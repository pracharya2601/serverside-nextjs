import {useRouter} from 'next/router';

export const getServerSideProps = async context => {
  return {
    props: {
      data: "hello dashboard"
    }
  }
}

export default (props) => {
  const router = useRouter();
  console.log(router)
  // const data = props.data;
  
  return(
    <div>
      <h2>Dashboard</h2>
      <button onClick={() => router.push("/")}>Push to home <i>you can come back to this place</i></button>
      <br/>
      <br/>
      <button onClick={() => router.replace("/")}>Push to home <i>cannot comeback to this place</i></button>

    </div>
  )
}

