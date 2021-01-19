import { Grid, makeStyles } from '@material-ui/core';
import { Formik } from 'formik';
import { Fragment, useState } from 'react';

import FormBase from '../form/form-base';
import FormButton from '../form/form-button';
import FormSelect, { IOptions } from '../form/form-select';
import SubTitle from '../typography/subtitle';
import Title from '../typography/title';

interface IProps {}

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: theme.spacing(2)
  }
}));

export default function SearchPersonal({}: IProps) {
  const classes = useStyles();

  const [locationOptions] = useState<IOptions[]>([
    { label: 'Remoto', value: 'remote' },
    { label: 'São Paulo', value: 'SP' }
  ]);
  const [modalidadeOptions] = useState<IOptions[]>([
    { label: 'Ciclismo', value: 'cyclism' },
    { label: 'Corrida', value: 'run' }
  ]);

  return (
    <Fragment>
      <Title center>Encontre seu personal</Title>
      <SubTitle center>Pesquise por modalidade e/ou localização</SubTitle>

      <div className={classes.form}>
        <Formik
          initialValues={{ modalidade: '', location: '' }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({}) => (
            <FormBase>
              <Grid container alignItems='center' alignContent='center' spacing={2}>
                <Grid item xs={12} md={6}>
                  <FormSelect name='location' label='Localização' options={locationOptions} />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormSelect name='modalidade' label='Modalidade' options={modalidadeOptions} />
                </Grid>

                <Grid item md={12}>
                  <FormButton text='Buscar' />
                </Grid>
              </Grid>
            </FormBase>
          )}
        </Formik>
      </div>
    </Fragment>
  );
}
