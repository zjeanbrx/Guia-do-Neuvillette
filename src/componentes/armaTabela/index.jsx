import styles from './armaTabela.module.css';

export default function NeuvilletteGuide() {
  return (
    <div className={styles.container}>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Arma</th>
              <th>% DPS</th>
              <th>Notas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rito do Fluxo Eterno R5 (Assinatura)</td>
              <td>168%</td>
              <td>Necessidade de Recarga = 100%</td>
            </tr>
            <tr>
              <td>Rito do Fluxo Eterno R1 (Assinatura)</td>
              <td>138%</td>
              <td>Necessidade de Recarga = 100%</td>
            </tr>
            <tr>
              <td>Sacrifício de Jade R5</td>
              <td>128%</td>
              <td></td>
            </tr>
            <tr>
              <td>Supervisão de Caixa R5</td>
              <td>117%</td>
              <td></td>
            </tr>
            <tr>
              <td>Sacrifício de Jade R1</td>
              <td>113%</td>
              <td></td>
            </tr>
            <tr>
              <td>Esplendor Índigo R5</td>
              <td>105%</td>
              <td>Necessidade de Recarga = 116%</td>
            </tr>
            <tr>
              <td>Oração R5</td>
              <td>103%</td>
              <td></td>
            </tr>
            <tr>
              <td>Kagura R5</td>
              <td>103%</td>
              <td>Média entre 3 rotações, E antes do AC</td>
            </tr>
            <tr>
              <td>Supervisão de Caixa R1</td>
              <td>103%</td>
              <td></td>
            </tr>
            <tr>
              <td>Sinfonia R5 (Rotação com + de 30 seg)</td>
              <td>102%</td>
              <td>Média entre buffs, passiva ativa ao entrar em campo no início</td>
            </tr>
            <tr>
              <td>Sinfonia R5 (Rotação com - de 30 seg)</td>
              <td>100%</td>
              <td>Média entre buffs, passiva ativa ao entrar em campo no início</td>
            </tr>
            <tr>
              <td>Esplendor Índigo R1</td>
              <td>100%</td>
              <td>Necessidade de Recarga = 120%</td>
            </tr>
            <tr>
              <td>Protótipo Âmbar R1-R5</td>
              <td>100%</td>
              <td>Necessidade de Recarga = 100%</td>
            </tr>
            <tr>
              <td>Kagura R1</td>
              <td>99%</td>
              <td>Média entre 3 rotações, E antes do AC</td>
            </tr>
            <tr>
              <td>Oração R1</td>
              <td>99%</td>
              <td></td>
            </tr>
            <tr>
              <td>Sinfonia R1 (Rotação com + de 30 seg)</td>
              <td>97%</td>
              <td>Média entre buffs, passiva ativa ao entrar em campo no início</td>
            </tr>
            <tr>
              <td>Pérola Solar R5</td>
              <td>97%</td>
              <td></td>
            </tr>
            <tr>
              <td>Sinfonia R1 (Rotação com - de 30 seg)</td>
              <td>96%</td>
              <td>Média entre buffs, passiva ativa ao entrar em campo no início</td>
            </tr>
            <tr>
              <td>Fumetsu Gekka R1-R5</td>
              <td>96%</td>
              <td></td>
            </tr>
            <tr>
              <td>Pérola Solar R1</td>
              <td>95%</td>
              <td></td>
            </tr>
            <tr>
              <td>Sinfonia R1 (Sem passiva)</td>
              <td>94%</td>
              <td></td>
            </tr>
            <tr>
              <td>Coração do Vasto Azul R5</td>
              <td>94%</td>
              <td></td>
            </tr>
            <tr>
              <td>Ágata do Penhasco Obscuro R1-R5</td>
              <td>93%</td>
              <td></td>
            </tr>
            <tr>
              <td>Anel de Hakushin R5</td>
              <td>92%</td>
              <td></td>
            </tr>
            <tr>
              <td>Reminiscências de Tulaytullah R1-R5</td>
              <td>90%</td>
              <td></td>
            </tr>
            <tr>
              <td>Coração do Vasto Azul R1</td>
              <td>89%</td>
              <td></td>
            </tr>
            <tr>
              <td>Anel de Hakushin R1</td>
              <td>88%</td>
              <td></td>
            </tr>
            <tr>
              <td>Fluxo de Pureza R5</td>
              <td>77%</td>
              <td>E antes do AC</td>
            </tr>
            <tr>
              <td>Fluxo de Pureza R1</td>
              <td>71%</td>
              <td>E antes do AC</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}