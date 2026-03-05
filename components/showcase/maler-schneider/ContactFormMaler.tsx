"use client";

import { useState, useCallback, type FormEvent, type ChangeEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Upload, X, Image as ImageIcon } from "lucide-react";
import { services } from "@/data/maler-schneider";

type PhotoPreview = { name: string; url: string };

export default function ContactFormMaler() {
  const searchParams = useSearchParams();

  /* ── Pre-fill from Farbberater or Favorites ── */
  const farbberater = searchParams.get("farbberater");
  const favorites = searchParams.get("favorites");

  const prefillMessage = (() => {
    const parts: string[] = [];
    if (farbberater) {
      const [room, size, light, mood, tone] = farbberater.split(",");
      parts.push(
        `Farbberater-Ergebnis: Raum: ${room || "k.A."}, Größe: ${size || "k.A."}, Licht: ${light || "k.A."}, Stimmung: ${mood || "k.A."}, Farbton: ${tone || "k.A."}`
      );
    }
    if (favorites) {
      parts.push(`Favoriten-IDs: ${favorites}`);
    }
    return parts.join("\n");
  })();

  /* ── Form State ── */
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    roomSize: "",
    timeframe: "",
    message: prefillMessage,
    privacy: false,
  });
  const [photos, setPhotos] = useState<PhotoPreview[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);

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

  /* ── Photo Upload (client-side preview only) ── */
  const handleFiles = useCallback((files: FileList | null) => {
    if (!files) return;
    const newPhotos: PhotoPreview[] = [];
    Array.from(files).forEach((file) => {
      if (!file.type.startsWith("image/")) return;
      newPhotos.push({ name: file.name, url: URL.createObjectURL(file) });
    });
    setPhotos((prev) => [...prev, ...newPhotos].slice(0, 5));
  }, []);

  const removePhoto = (idx: number) => {
    setPhotos((prev) => {
      const next = [...prev];
      URL.revokeObjectURL(next[idx].url);
      next.splice(idx, 1);
      return next;
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  /* ── Submit ── */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 rounded-2xl p-8 text-center border border-emerald-200">
        <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900">
          Vielen Dank für Ihre Anfrage!
        </h3>
        <p className="mt-2 text-gray-600">
          Wir melden uns innerhalb von 24 Stunden bei Ihnen – meistens sogar
          schneller. Bitte schauen Sie auch in Ihren Spam-Ordner.
        </p>
        {photos.length > 0 && (
          <p className="mt-2 text-sm text-emerald-600">
            {photos.length} Raumfoto{photos.length > 1 ? "s" : ""} angehängt
          </p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Pre-fill info */}
      {(farbberater || favorites) && (
        <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200 text-sm text-emerald-800">
          <strong>Vorausgefüllt:</strong>{" "}
          {farbberater && "Farbberater-Ergebnis"}
          {farbberater && favorites && " + "}
          {favorites && "Inspirations-Favoriten"} wurden in Ihre Nachricht
          übernommen.
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
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
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
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
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
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
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
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
          />
        </div>
      </div>

      {/* Dropdowns */}
      <div className="grid sm:grid-cols-3 gap-4">
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
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white"
          >
            <option value="">Bitte wählen</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="farbberatung">Nur Farbberatung</option>
            <option value="sonstiges">Sonstiges</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="roomSize"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Raumgröße
          </label>
          <select
            id="roomSize"
            name="roomSize"
            value={form.roomSize}
            onChange={update}
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white"
          >
            <option value="">Bitte wählen</option>
            <option value="klein">Klein (unter 15 m²)</option>
            <option value="mittel">Mittel (15–30 m²)</option>
            <option value="gross">Groß (über 30 m²)</option>
            <option value="fassade">Fassade / Außen</option>
            <option value="mehrere">Mehrere Räume</option>
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
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white"
          >
            <option value="">Bitte wählen</option>
            <option value="schnell">So bald wie möglich</option>
            <option value="1monat">Innerhalb 1 Monat</option>
            <option value="3monate">Innerhalb 3 Monaten</option>
            <option value="flexibel">Zeitlich flexibel</option>
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
          placeholder="Beschreiben Sie Ihr Projekt – was möchten Sie streichen oder gestalten lassen?"
          className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none resize-y"
        />
      </div>

      {/* Photo Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Raumfotos (optional, max. 5)
        </label>
        <div
          className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors cursor-pointer ${
            dragActive
              ? "border-emerald-500 bg-emerald-50"
              : "border-gray-300 hover:border-emerald-400"
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          onClick={() => {
            const input = document.createElement("input");
            input.type = "file";
            input.multiple = true;
            input.accept = "image/*";
            input.onchange = (e) =>
              handleFiles((e.target as HTMLInputElement).files);
            input.click();
          }}
        >
          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-500">
            <span className="text-emerald-600 font-medium">
              Klicken oder Foto hierher ziehen
            </span>
          </p>
          <p className="text-xs text-gray-400 mt-1">
            JPG, PNG bis 10 MB – ein Foto vom Raum hilft uns bei der
            Einschätzung
          </p>
        </div>

        {/* Photo Previews */}
        {photos.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-3">
            {photos.map((photo, idx) => (
              <div
                key={idx}
                className="relative w-20 h-20 rounded-lg overflow-hidden border border-gray-200 group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.url}
                  alt={photo.name}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => removePhoto(idx)}
                  className="absolute top-0.5 right-0.5 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
            {photos.length < 5 && (
              <div className="w-20 h-20 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                <ImageIcon className="h-6 w-6" />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Privacy */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="privacy"
          checked={form.privacy}
          onChange={update}
          required
          className="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
        />
        <span className="text-sm text-gray-500">
          Ich habe die Datenschutzerklärung gelesen und stimme der
          Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu. *
        </span>
      </label>

      <button
        type="submit"
        className="w-full py-3.5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-500 transition-colors shadow-lg"
      >
        Anfrage absenden
      </button>
    </form>
  );
}
