import { useNavigate, useLocation, useParams } from 'react-router-dom';

function useRouter() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  // Trả về các đối tượng cần thiết cho định tuyến
  return { navigate, location, params };
}

export default useRouter;
