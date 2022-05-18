import { useEffect, useState } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  const [transactions, setTransactions] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/api/transactions")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Development of website</td>
            <td className="deposit">R$12.000</td>
            <td>Development</td>
            <td>17/05/2022</td>
          </tr>

          <tr>
            <td>House rent</td>
            <td className="withdraw"> - R$2.000</td>
            <td>Home</td>
            <td>05/05/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
