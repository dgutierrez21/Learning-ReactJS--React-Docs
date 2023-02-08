import { Heading } from "./components/Heading";
import { Section } from "./components/Section";

export const Page = () => {
  return (
    <Section nivel={1}>
      <Heading>Titulo</Heading>
      <Section nivel={2}>
        <Heading>Encabezado</Heading>
        <Heading>Encabezado</Heading>

        <Section nivel={3}>
          <Heading>Sub-encabezado</Heading>
          <Heading>Sub-encabezado</Heading>
          <Heading>Sub-encabezado</Heading>

          <Section nivel={4}>
            <Heading>Sub-sub-encabezado</Heading>
            <Heading>Sub-sub-encabezado</Heading>
            <Heading>Sub-sub-encabezado</Heading>
            <Heading>Sub-sub-encabezado</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
};
