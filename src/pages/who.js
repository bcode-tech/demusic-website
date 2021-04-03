import React from "react";
import Layout from "../components/layout/layout";

const Who = () => {
  return (
    <Layout>
      <p className="title">Chi Siamo</p>
      <p className="text">
        Il progetto DeMusic nasce dalla collaborazione tra KNOBS e BCode, due
        realtà specializzate nel settore blockchain: KNOBS offre consulenza e
        sviluppa progetti e piattaforme blockchain-based dal 2014; BCode è una
        startup innovativa accreditata come spin-off del Politecnico di Milano
        ed offre prodotti e servizi basati su tecnologia blockchain, come ad
        esempio notarizzazioni, tracciabilità, votazioni, gestione di token e
        gare d’appalto.
      </p>
    </Layout>
  );
};

export default Who;
