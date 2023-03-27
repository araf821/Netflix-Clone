interface MenuProps {
  visible: boolean;
}

const DropDownMenu: React.FC<MenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div
      className="
    bg-black
    w-56
    absolute
    top-8
    left-0
    py-5
    flex
    flex-col
    border-2
    border-gray-800
   "
    >
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underline">Home</div>
      </div>
    </div>
  );
};
export default DropDownMenu;
