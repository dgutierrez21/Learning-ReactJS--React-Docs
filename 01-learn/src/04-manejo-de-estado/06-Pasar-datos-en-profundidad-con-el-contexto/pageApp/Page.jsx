import { Heading } from "./components/Heading";
import { Section } from "./components/Section";

export const Page = () => {
  return (
    <Section>
      <Heading>Titulo</Heading>
      <Section>
        <Heading>Encabezado</Heading>
        <Heading>Encabezado</Heading>

        <Section>
          <Heading>Sub-encabezado</Heading>
          <Heading>Sub-encabezado</Heading>
          <Heading>Sub-encabezado</Heading>

          <Section>
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
