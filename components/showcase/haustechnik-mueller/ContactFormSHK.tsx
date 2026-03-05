"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { services } from "@/data/haustechnik-mueller";

export default function ContactFormSHK() {
  const searchParams = useSearchParams();

  /* ── Pre-fill from HeizungsCheck ── */
  const heizungscheck = searchParams.get("heizungscheck");

  const prefillMessage = (() => {
    if (!heizungscheck) return "";
    const parts = decodeURIComponent(heizungscheck).split(",");
    const [current, age, area, property, year, floor, prios] = parts;
    const lines: string[] = ["HeizungsCheck-Ergebnis:"];
    if (current) lines.push(`Aktuelle Heizung: ${current}`);
    if (age) lines.push(`Alter: ${age}`);
    if (area) lines.push(`Wohnfläche: ${area} m²`);
    if (property) lines.push(`Immobilienart: ${property}`);
    if (year) lines.push(`Baujahr: ${year}`);
    if (floor) lines.push(`Fußbodenheizung: ${floor}`);
    if (prios) lines.push(`Prioritäten: ${prios.replace(/-/g, ", ")}`);
    return lines.join("\n");
  })();

  /* ── Form State ── */
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: heizungscheck ? "heizungscheck-beratung" : "",
    buildingYear: "",
    currentHeating: "",
    timeframe: "",
    message: prefillMessage,
    privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-red-50 rounded-2xl p-8 text-center border border-red-200">
        <CheckCircle2 className="h-12 w-12 text-red-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900">
          Vielen Dank für Ihre Anfrage!
        </h3>
        <p className="mt-2 text-gray-600">
          Wir melden uns innerhalb von 24 Stunden bei Ihnen – meistens sogar
          schneller. Bitte schauen Sie auch in Ihren Spam-Ordner.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Pre-fill info */}
      {heizungscheck && (
        <div className="bg-red-50 rounded-xl p-4 border border-red-200 text-sm text-red-800">
          <strong>Vorausgefüllt:</strong> Ihre HeizungsCheck-Ergebnisse wurden
          in die Nachricht übernommen.
        </div>
      )}

      {/* Name Row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Vorname *
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            value={form.firstName}
            onChange={update}
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nachname *
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            value={form.lastName}
            onChange={update}
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
          />
        </div>
      </div>

      {/* Contact Row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            E-Mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={update}
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={update}
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
          />
        </div>
      </div>

      {/* Dropdowns */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Gewünschte Leistung
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={update}
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none bg-white"
          >
            <option value="">Bitte wählen</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="notdienst">Notdienst</option>
            <option value="heizungscheck-beratung">
              HeizungsCheck-Beratung
            </option>
            <option value="sonstiges">Sonstiges</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="timeframe"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Wunschzeitraum
          </label>
          <select
            id="timeframe"
            name="timeframe"
            value={form.timeframe}
            onChange={update}
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none bg-white"
          >
            <option value="">Bitte wählen</option>
            <option value="schnell">So bald wie möglich</option>
            <option value="1monat">Innerhalb 1 Monat</option>
            <option value="3monate">Innerhalb 3 Monaten</option>
            <option value="flexibel">Zeitlich flexibel</option>
          </select>
        </div>
      </div>

      {/* Extra SHK Fields */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="buildingYear"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Baujahr der Immobilie
          </label>
          <select
            id="buildingYear"
            name="buildingYear"
            value={form.buildingYear}
            onChange={update}
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none bg-white"
          >
            <option value="">Bitte wählen</option>
            <option value="vor-1978">Vor 1978</option>
            <option value="1978-1995">1978–1995</option>
            <option value="1995-2010">1995–2010</option>
            <option value="nach-2010">Nach 2010</option>
            <option value="neubau">Neubau</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="currentHeating"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Aktuelle Heizung
          </label>
          <select
            id="currentHeating"
            name="currentHeating"
            value={form.currentHeating}
            onChange={update}
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none bg-white"
          >
            <option value="">Bitte wählen</option>
            <option value="gas">Gas</option>
            <option value="oel">Öl</option>
            <option value="waermepumpe">Wärmepumpe</option>
            <option value="pellet">Pellet / Holz</option>
            <option value="fernwaerme">Fernwärme</option>
            <option value="elektro">Elektro / Nachtspeicher</option>
            <option value="keine">Keine / Neubau</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Ihre Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={update}
          placeholder="Beschreiben Sie Ihr Projekt – was möchten Sie modernisieren oder einbauen lassen?"
          className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none resize-y"
        />
      </div>

      {/* Privacy */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="privacy"
          checked={form.privacy}
          onChange={update}
          required
          className="mt-1 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
        />
        <span className="text-sm text-gray-500">
          Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung
          meiner Daten zur Bearbeitung meiner Anfrage zu. *
        </span>
      </label>

      <button
        type="submit"
        className="w-full py-3.5 bg-red-600 text-white font-bold rounded-xl hover:bg-red-500 transition-colors shadow-lg"
      >
        Anfrage absenden
      </button>
    </form>
  );
}
