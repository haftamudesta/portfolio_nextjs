import {
        Tailwind,
        Body,
        Container,
        Head,
        Heading,
        Hr,
        Html,
        Preview,
        Text,
        Section,
      } from "@react-email/components";

      interface EmailData {
        name: string;
        email: string;
        message?: string;
        }
      const MyEmail = ({ name, email,message }:EmailData) => {
        const previewText = "Detailed information from the sender";
        
        
        return (
          <Html>
            <Tailwind>
              <Head>
                <title>Your New Message is Here</title>
              </Head>
              <Preview>{previewText}</Preview>
              <Body className="bg-white font-sans">
                <Container className="mx-auto px-4 py-8">
                  <Section className="mb-6">
                    <Text className="text-3xl font-bold text-sky-500">Your Portfolio was viewed</Text>
                  </Section>
                  <Section className="mb-8">
              <Heading className="text-3xl font-bold text-gray-900 mb-4">
                Dear Haftamu Desta you have recieved email from {name} with an email address of {email}, please take an action accordingly!
              </Heading>
              <Text className="text-lg text-gray-700 mb-6">
                the message send from {name } is <span className="text-base font-semibold text-teal-400">{message}</span>
              </Text>
            </Section>
            <Hr className="border-gray-200 my-8" />
            </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MyEmail;