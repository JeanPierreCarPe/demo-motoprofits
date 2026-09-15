"use client";

import { useState } from "react";
import { contactHero, contactIntents, contactChannels, processFaqs, footer } from "@/data/siteContent";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { GoldButton } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";

export default function ContactPage() {
  const [intent, setIntent] = useState(contactIntents[0].label);
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero {...contactHero} />

      <section className="flex flex-col items-center gap-8 px-5 py-12 sm:px-10 lg:px-20">
        <Container className="flex flex-wrap gap-6">
          {contactIntents.map((item) => (
            <button
              key={item.label}
              onClick={() => setIntent(item.label)}
              className={`flex-1 min-w-56 rounded-[16px] border-2 p-6 text-left ${
                intent === item.label ? "border-gold bg-gold/10" : "border-foreground/20 bg-surface-alt"
              }`}
            >
              <p className="font-heading text-lg font-extrabold text-foreground">{item.label}</p>
              <p className="mt-2 font-body text-sm text-foreground/70">{item.description}</p>
              <p className="mt-4 font-body text-sm font-semibold text-gold">{item.action} →</p>
            </button>
          ))}
        </Container>
      </section>

      <section className="flex flex-col items-center gap-4 px-5 sm:px-10 lg:px-20">
        <Container className="rounded-xl border border-gold/50 bg-surface-alt px-6 py-4 text-center">
          <p className="font-body text-sm text-foreground/85">
            Bidding on something ending soon? Use live chat below for the fastest response — under 15 minutes during
            active auction closings.
          </p>
        </Container>
      </section>

      <section className="flex flex-col items-center gap-10 px-5 py-16 sm:px-10 lg:px-20">
        <Container className="flex flex-col gap-10 lg:flex-row">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="flex flex-1 flex-col gap-5 rounded-[20px] bg-surface-alt p-6 sm:p-8"
          >
            <p className="font-heading text-sm uppercase text-gold">Topic: {intent}</p>
            {sent ? (
              <p className="font-body text-lg text-foreground">
                Thanks — your message is in. Expect a reply at the email you provide, usually within two hours.
              </p>
            ) : (
              <>
                <label className="flex flex-col gap-2">
                  <span className="font-body text-sm text-foreground/70">Name</span>
                  <input required className="h-12 rounded-lg border-2 border-foreground/50 bg-[#131313] px-4 font-body text-foreground focus:border-gold focus:outline-none" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="font-body text-sm text-foreground/70">Email</span>
                  <input required type="email" className="h-12 rounded-lg border-2 border-foreground/50 bg-[#131313] px-4 font-body text-foreground focus:border-gold focus:outline-none" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="font-body text-sm text-foreground/70">Message</span>
                  <textarea required rows={5} className="rounded-lg border-2 border-foreground/50 bg-[#131313] px-4 py-3 font-body text-foreground focus:border-gold focus:outline-none" />
                </label>
                <GoldButton type="submit">Send Message</GoldButton>
              </>
            )}
          </form>

          <div className="flex w-full flex-col gap-6 lg:w-80">
            <div className="flex flex-col gap-3 rounded-[16px] border border-foreground/20 bg-surface-alt p-6">
              <p className="font-heading font-extrabold text-foreground">Direct Channels</p>
              <p className="font-body text-sm text-foreground/80">{contactChannels.email}</p>
              <p className="font-body text-sm text-foreground/80">{contactChannels.phone}</p>
              <p className="font-body text-sm text-foreground/60">{contactChannels.hours}</p>
            </div>
            <div className="flex flex-col gap-3 rounded-[16px] border border-foreground/20 bg-surface-alt p-6">
              <p className="font-heading font-extrabold text-foreground">Follow Us</p>
              <div className="flex gap-4">
                {footer.socials.map((s) => (
                  <span key={s.label} className="font-body text-sm text-foreground/70">
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="flex flex-col items-center gap-8 bg-surface px-5 py-16 sm:px-10 lg:px-20">
        <Container className="max-w-3xl">
          <h2 className="mb-8 text-center font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
            Common Questions
          </h2>
          <Accordion items={[...processFaqs.Sellers, ...processFaqs.Buyers]} />
        </Container>
      </section>
    </>
  );
}
