import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

export default function AddExpensesPage() {
  const navigate = useNavigate()  // useNavigate() => Remix Hook

  function closeHandler(){
    navigate('..')
  }

  return (
      <Modal onClose={closeHandler}>
        <ExpenseForm />
      </Modal>   
  );
}
