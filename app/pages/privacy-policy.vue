<template>
  <div>
    <SiteHeader />

    <UPageSection
      headline="Legal"
      title="Privacy Policy"
    >
      <template #description>
        <p>Last updated {{ lastUpdated }}.</p>
        <p>{{ site.name }} respects your privacy. This policy explains what personal information we collect, how we use it, and the choices you have.</p>
      </template>
      <template #body>
        <div class="mx-auto w-full max-w-3xl space-y-10 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:leading-snug [&_h2]:text-highlighted sm:[&_h2]:text-2xl">
          <section>
            <h2>Who we are</h2>
            <p>{{ site.name }} provides its services across your local area. If you have any questions about this policy, you can reach us on {{ site.phone.display }}.</p>
          </section>

          <section>
            <h2>Information we collect</h2>
            <p>We only collect information you choose to give us. This typically includes:</p>
            <ul class="my-4 list-disc space-y-2 pl-5">
              <li>Your name, phone number and email address when you request a quote or contact us.</li>
              <li>Your address and details about the work you'd like done, so we can prepare an accurate quote.</li>
              <li>Any notes or messages you send us through our website form, by phone or by email.</li>
            </ul>
            <p>We do not collect payment card details through this website.</p>
          </section>

          <section>
            <h2>How we use your information</h2>
            <p>We use the information you provide to:</p>
            <ul class="my-4 list-disc space-y-2 pl-5">
              <li>Respond to your enquiry and prepare a quote.</li>
              <li>Schedule, carry out and follow up on the services you request.</li>
              <li>Contact you about your job, including reminders and updates.</li>
              <li>Keep records for accounting and legal purposes.</li>
            </ul>
            <p>We will never sell your personal information.</p>
          </section>

          <section>
            <h2>Sharing your information</h2>
            <p>We only share your information where it's needed to run our business — for example with trusted service providers who help us operate (such as email or scheduling tools), or where we're required to by law. Anyone we share information with is expected to keep it secure and use it only for the purpose we've shared it.</p>
          </section>

          <section>
            <h2>Keeping your information secure</h2>
            <p>We take reasonable steps to protect the information you give us from misuse, loss and unauthorised access. We keep it only for as long as we need it to provide our services and meet our legal obligations.</p>
          </section>

          <section>
            <h2>Cookies</h2>
            <p>Our website may use basic cookies and similar technologies to help the site work properly and to understand how visitors use it. You can disable cookies in your browser settings; some parts of the site may not work as well if you do.</p>
          </section>

          <section>
            <h2>Your rights</h2>
            <p>You can ask us to access, correct or delete the personal information we hold about you. To make a request, or if you have a concern about how we've handled your information, please contact us on {{ site.phone.display }}.</p>
          </section>

          <section>
            <h2>Changes to this policy</h2>
            <p>We may update this policy from time to time. Any changes will be posted on this page with an updated date.</p>
          </section>
        </div>
      </template>
    </UPageSection>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
const { site } = useAppConfig()
const { pageUrl } = useCanonical()

const lastUpdated = 'PLACEHOLDER: Month Year'

useSeoMeta({
  title: 'Privacy Policy',
  description: `How ${site.name} collects, uses and protects the personal information you share with us.`,
  robots: 'noindex, follow',
})

useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
})
</script>
