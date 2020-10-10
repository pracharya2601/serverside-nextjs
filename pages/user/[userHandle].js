import {useRouter} from 'next/router';

export default function UserHandle(props) {
  const router = useRouter();
  console.log(props);
  if(router.isFallback) return <h2>Loading...</h2>
  return (
    <div>
      Single User {props.data}
    </div>
  )
};

export const getStaticPaths =  async () => {
  
  return{
    paths: [{params: {userHandle: 'firstuser'}},{params: {userHandle: 'seconduser'}}],
    fallback: true
  }
}

export const getStaticProps = async (context) => {
  return {
    props: {
      data: 123455
    }
  }
}