import Link from 'next/Link';

export default ({ data} ) => {

    return(
        <div>
            <h1>Home Pages</h1>
            <div>
                {data.map((item, key) => (
                <ul key={key}>
                    <li>{item.name}</li>
                    <li>{item.type}</li>
                    <li>{item.sweet ? "Sweet" : "Not Sweet"}</li>
                </ul>
                ))}
            </div>

            <Link href="/auth/login">
                <a>Go to Login</a>
            </Link>
            <br />
            <Link href="/dashboard/maindashboard">
                <a>Go to Dashboard</a>
            </Link>
        </div>

    )
}

export const getStaticProps = async context => {
    return {
      props: {
        data: [
          {
            name: "apple",
            type: "fruit",
            sweet: true,
          },
          {
            name: "banana",
            type: "berry",
            sweet: true,
          },
          {
            name: "Tomato",
            type: "berry",
            sweet: false,
          },
          {
            name: "Watermelon",
            type: "fruit",
            sweet: true,
          },
        ]
      }
    }
  }