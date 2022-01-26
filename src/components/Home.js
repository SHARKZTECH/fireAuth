export default function Home() {
  let user = sessionStorage.getItem("user");
  console.log(user);
  return (
    <div className="home">
      <h1>Hello Home</h1>
      <p>{user.email}</p>
    </div>
  );
}
