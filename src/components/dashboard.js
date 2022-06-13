import { useSelector } from 'react-redux';
import MyText from './typography';

const Dashboad = () => {
  const currentUser = useSelector((state) => state.usersReducer.currentUser);
  console.log(currentUser);
  return (
    <>
      <MyText text={currentUser.attributes.name} type="h5" />
    </>
  );
};

export default Dashboad;
