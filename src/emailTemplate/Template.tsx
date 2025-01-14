import {
    Body,
    Button,
    Container,
    Font,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Section,
    Tailwind,
    Text,
  } from '@react-email/components'
  import * as React from 'react'
  
  export const HeroArticleImage = (p0: { name: string }) => {
    return (
      <Html>
        <Head>
          <Font
            fontFamily="Inter"
            fallbackFontFamily="Helvetica"
            webFont={{
              url: 'https://fonts.googleapis.com/css2?family=Inter&display=swap',
              format: 'woff2',
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Preview>Hero article image</Preview>
        <Tailwind>
          <Body className="mx-auto my-auto bg-white font-sans antialiased">
            <Container className="mx-auto my-[40px] rounded border border-solid border-gray-200 bg-white p-8">
              <Section>
                <Img
                  src="https://images.unsplash.com/photo-1702470170564-22dd352f5b88?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="h-[320px] w-full rounded-xl object-cover"
                />
                <Section className="mt-8 text-center">
                  <Text className="my-4 text-lg font-semibold text-indigo-600">
                    Feito!!
                  </Text>
                  <Heading
                    as="h1"
                    className="m-0 mt-2 text-4xl font-semibold text-gray-900"
                  >
                    Obrigado por tester meu projeto
                  </Heading>
                  <Text className="text-[16px] text-gray-500">
                    Meus agradecimentos por ter testado meu site até aqui, se quiser ver um pouco mais do meu trabalho aqui estão algumas redes:
                  </Text>
                    <Button
                        className="mt-4 rounded-lg bg-indigo-600 px-10 py-3 font-semibold text-white"
                        href="https://github.com/GustavoSilvadeCarvalho"
                        >
                        Github
                    </Button>
                </Section>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    )
  }
  
  export default HeroArticleImage
  