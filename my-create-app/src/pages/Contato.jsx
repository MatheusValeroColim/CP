import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

const Contato = () => {
  const { handleSubmit, control, setValue } = useForm();

  const onSubmit = (data) => {
    // Manipule os dados do formulário, como enviar um email ou salvar no banco de dados.
    console.log(data);
  };

  const buscarCEP = async (cep) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { data } = response;
      setValue('logradouro', data.logradouro);
      setValue('bairro', data.bairro);
      setValue('cidade', data.localidade);
      setValue('estado', data.uf);
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    }
  };

  return (
    <div>
      <h1>Página de Contato</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nome:</label>
          <Controller
            name="nome"
            control={control}
            render={({ field }) => <input {...field} />}
          />
        </div>
        <div>
          <label>CEP:</label>
          <Controller
            name="cep"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                onBlur={(e) => buscarCEP(e.target.value)}
              />
            )}
          />
        </div>
        <div>
          <label>Logradouro:</label>
          <Controller
            name="logradouro"
            control={control}
            render={({ field }) => <input {...field} readOnly />}
          />
        </div>
        <div>
          <label>Bairro:</label>
          <Controller
            name="bairro"
            control={control}
            render={({ field }) => <input {...field} readOnly />}
          />
        </div>
        <div>
          <label>Cidade:</label>
          <Controller
            name="cidade"
            control={control}
            render={({ field }) => <input {...field} readOnly />}
          />
        </div>
        <div>
          <label>Estado:</label>
          <Controller
            name="estado"
            control={control}
            render={({ field }) => <input {...field} readOnly />}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;
