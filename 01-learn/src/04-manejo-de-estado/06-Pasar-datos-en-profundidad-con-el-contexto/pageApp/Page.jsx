import { Heading } from "./components/Heading";
import { Section } from "./components/Section";

export const Page = () => {
  return (
    <Section>
      <Heading nivel={1}>Titulo</Heading>
      <Section>
        <Heading nivel={2}>Encabezado</Heading>
        <Heading nivel={2}>Encabezado</Heading>

        <Section>
          <Heading nivel={3}>Sub-encabezado</Heading>
          <Heading nivel={3}>Sub-encabezado</Heading>
          <Heading nivel={3}>Sub-encabezado</Heading>

          <Section>
            <Heading nivel={4}>Sub-sub-encabezado</Heading>
            <Heading nivel={4}>Sub-sub-encabezado</Heading>
            <Heading nivel={4}>Sub-sub-encabezado</Heading>
            <Heading nivel={4}>Sub-sub-encabezado</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
};
