import React from "react";
import Layout from "../components/layout/layout";

const How = () => {
  return (
    <Layout>
        <p className="title">Vantaggi</p>
        <ul>
          <li>
            Diritti d’autore tokenizzati
            <p>
              Attraverso DeMusic, i brani sono associati a degli NFT (Non
              Fungible Tokens) che ne rappresentano i diritti d’autore,
              garantendo all’artista una remunerazione automatica in base al
              numero di ascolti attraverso la piattaforma stessa. Grazie all’uso
              di token, sarà inoltre possibile ripartire i diritti d’autore in
              più parti, aprendo la possibilità alla vendita o cessione anche
              parziale, con conseguente ripartizione dei guadagni in base ai
              parametri scelti dall’autore stesso.
            </p>
          </li>
          <li>
            Supporto agli artisti
            <p>
              Un sistema di micropagamenti integrato, consente agli ascoltatori
              di sostenere i propri idoli in maniera diretta, automatica e
              certificata ad ogni riproduzione, anche attraverso abbonamenti
              mensili flat che vengono ripartiti in modo dimostrabilmente equo,
              tra i diversi artisti, proporzionalmente agli ascolti ottenuti
              dalla loro musica.
            </p>
          </li>
          <li>
            Meccanismo di incentivi per gli streamer
            <p>
              Per garantire la massima availability della rete, i music-relayers
              (streamer), ovvero gli utenti che hanno il compito di conservare e
              condividere in streaming i brani pubblicati su DeMusic, ricevono
              un incentivo economico per il loro lavoro.
            </p>
          </li>
          <li>
            Massima trasparenza
            <p>
              Tutte le informazioni sulla proprietà dei brani e le regole sulla
              remunerazione in base agli ascolti, sui music-relayers e sul loro
              operato, sono conservate in modo immutabile all’interno di smart
              contract (veri e propri contratti digitali in opera sulla
              blockchain) che ne garantiscono l’autenticità ed il rispetto delle
              regole prestabilite
            </p>
          </li>
        </ul>
    </Layout>
  );
};

export default How;
