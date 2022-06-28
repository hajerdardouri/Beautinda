import Addtodo from "../components/AddTodo";

const Todoslayout = ({ children }) => {
  return (
    <>
      <Addtodo />
      <main>{children}</main>
    </>
  );
};

export default Todoslayout;
