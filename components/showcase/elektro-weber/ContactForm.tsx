"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="text-lg font-bold text-green-800">
          Nachricht gesendet!
        </h3>
        <p className="mt-2 text-sm text-green-700">
          Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden
          bei Ihnen.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-green-600 underline hover:no-underline cursor-pointer"
        >
          Neue Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Vorname
          </label>
          <input
            type="text"
            placeholder="Max"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Nachname
          </label>
          <input
            type="text"
            placeholder="Mustermann"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            E-Mail
          </label>
          <input
            type="email"
            placeholder="max@beispiel.de"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Telefon
          </label>
          <input
            type="tel"
            placeholder="0123 456 789"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Betreff
        </label>
        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option value="">Bitte wählen…</option>
          <option>Elektroinstallation</option>
          <option>Smart Home</option>
          <option>Sicherheitstechnik</option>
          <option>Photovoltaik</option>
          <option>Gewerbe & Industrie</option>
          <option>Notdienst</option>
          <option>Sonstiges</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Nachricht
        </label>
        <textarea
          rows={5}
          placeholder="Beschreiben Sie Ihr Anliegen…"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="datenschutz"
          className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <label htmlFor="datenschutz" className="text-xs text-gray-500">
          Ich stimme der Verarbeitung meiner Daten gemäß der
          Datenschutzerklärung zu.
        </label>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors cursor-pointer"
      >
        <Send className="h-4 w-4" />
        Nachricht senden
      </button>
    </form>
  );
}
