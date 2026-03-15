import Link from "next/link";

export default function Impressum() {
  return (
    <main className="mx-auto max-w-[700px] px-6 py-20 md:py-32">
      <Link
        href="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        &larr; Back
      </Link>

      <h1 className="mt-8 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Impressum
      </h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-display text-base font-semibold text-foreground">
            Angaben gem&auml;&szlig; &sect;5 TMG
          </h2>
          <p className="mt-2">
            Lennart Wendt
            <br />
            Helmholtzstra&szlig;e 24
            <br />
            10587 Berlin
          </p>
        </section>

        <section>
          <h2 className="font-display text-base font-semibold text-foreground">
            Kontakt
          </h2>
          <p className="mt-2">
            E-Mail:{" "}
            <a
              href="mailto:lennart.wendt@lelia.io"
              className="text-foreground underline underline-offset-4 transition-colors hover:text-highlight"
            >
              lennart.wendt@lelia.io
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-display text-base font-semibold text-foreground">
            Haftungsausschluss
          </h2>
          <p className="mt-2">
            Die Inhalte dieser Seiten wurden mit gr&ouml;&szlig;ter Sorgfalt erstellt.
            F&uuml;r die Richtigkeit, Vollst&auml;ndigkeit und Aktualit&auml;t der Inhalte
            kann jedoch keine Gew&auml;hr &uuml;bernommen werden.
          </p>
        </section>
      </div>
    </main>
  );
}
