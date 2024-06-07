import Layout from '../layouts/Layout';
import Section from '../components/Section';

export default function PageNotFound() {
  return (
    <Layout error='404 error'>
      <Section>
        <p>{`Whoops! Looks like that page doesn't exist. 🤔`}</p>
      </Section>
    </Layout>
  );
}