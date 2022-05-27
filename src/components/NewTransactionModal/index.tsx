import { FormEvent, useState } from "react";

import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";
import { api } from "../../services/api";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("deposit");
  const [category, setCategory] = useState("");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = { title, value, category, type };

    api.post("/transactions", data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Register transaction</h2>

        <input
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="value"
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === "deposit"}
            activeColor="green"
            onClick={() => setType("deposit")}
          >
            <img src={incomeImg} alt="income" />
            <span>income</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActive={type === "withdraw"}
            activeColor="red"
            onClick={() => setType("withdraw")}
          >
            <img src={outcomeImg} alt="outcome" />
            <span>outcome</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
}
