import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

export default function AddExpensesPage() {
  return (
    <main>
      <Modal>
        <ExpenseForm />
      </Modal>
    </main>
  );
}
