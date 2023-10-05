import { useParams } from 'react-router-dom';

const DetailPage = () => {
  // const [detail, setDetail] = useState({});
  const param = useParams();
  // const handleFetch = () => {
  //   return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((rs) => {
  //     setDetail(rs.data);
  //   });
  // };
  // useEffect(() => {
  //   handleFetch();
  //   return () => {
  //     setDetail();
  //   };
  // }, [id]);
  return (
    <>
      {/* <h1>{detail.title}</h1> */}
      <h1>hello</h1>
    </>
  );
};

export default DetailPage;
