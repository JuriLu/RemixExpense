import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

export default function UpdateExpensesPage() {
  return (
    <>
      <Modal>
        <ExpenseForm />
      </Modal>
      <h1>Ta mor vesh qe jom ne update</h1>
    </>
  );
}
