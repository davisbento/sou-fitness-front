import { Grid, makeStyles } from '@material-ui/core';
import FormBase from 'components/atoms/form/form-base';
import FormButton from 'components/atoms/form/form-button';
import FormSelect, { IOptions } from 'components/atoms/form/form-select';
import SubTitle from 'components/atoms/typography/subtitle';
import Title from 'components/atoms/typography/title';
import { Formik } from 'formik';
import { useState } from 'react';

interface IProps {}

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
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
    <div className={classes.root}>
      <Title variant='h3' center>
        Encontre seu personal
      </Title>
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
    </div>
  );
}
