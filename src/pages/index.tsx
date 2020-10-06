export default () => {
  const getPosts = (id: string) => {
    const user = fetch("/api/user")
      .then((res) => res.json)
      .then((data) => data);
  };
  return <div>hello</div>;
};
