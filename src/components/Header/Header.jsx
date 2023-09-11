import Profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <div className="flex justify-between p-4 border-b-2">
      <h1 className="font-bold text-3xl">Knowledge Cafe</h1>
      <img src={Profile} alt="" />
    </div>
  );
};

export default Header;
