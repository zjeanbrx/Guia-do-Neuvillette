import styles from './tabelaConstelacoes.module.css';

export default function TabelaConstelacoes() {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Constelação</th>
            <th>Aumento no DPS%</th>
            <th>Aumento no DPS comparado à constelação anterior</th>
            <th>Notas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Instituição Venerável (C1)</td>
            <td>124%</td>
            <td>24%</td>
            <td>24% de Aumento no DPS comparado a C0</td>
          </tr>
          <tr>
            <td>A Lei Ordena (C2)</td>
            <td>138%</td>
            <td>11%</td>
            <td>14% de Aumento no DPS comparado a C0</td>
          </tr>
          <tr>
            <td>Ficção Antiga (C3)</td>
            <td>166%</td>
            <td>21%</td>
            <td>28% de Aumento no DPS comparado a C0</td>
          </tr>
          <tr>
            <td>Coroador em Compaixão (C4)</td>
            <td>~168%</td>
            <td>~1%</td>
            <td>1% de aumento no DPS comparado a C0<br />Nota: A rotação mudou porêm o mesmo DPS do time</td>
          </tr>
          <tr>
            <td>Julgamento Axiomático (C5)</td>
            <td>168%</td>
            <td>1%</td>
            <td>1% de Aumento no DPS comparado a C0</td>
          </tr>
          <tr>
            <td>Recompensa Furiosa (C6)</td>
            <td>216%</td>
            <td>29%</td>
            <td>48% de aumento no DPS comparado a C0<br />Removido um AC da rotação (Sem gotas)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}