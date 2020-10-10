import {useRouter} from 'next/router';

export default () => {
  const router = useRouter();
  console.log(router.query)
  return(
    <div>
      dynamic routing {router.query.item}
    </div>
  )
}