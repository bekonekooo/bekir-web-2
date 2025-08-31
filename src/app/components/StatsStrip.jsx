export default function StatsStrip() {
  const stats = [
    { k: "12+", v: "Yıllık Tecrübe" },
    { k: "30+", v: "Ülkeye İhracat" },
    { k: "250+", v: "Tamamlanan Proje" },
    { k: "98%", v: "Müşteri Memnuniyeti" },
  ];
  return (
    <div className="bg-white border-y border-gray-100">
      <div className="container-max grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className="py-6 text-center">
            <div className="text-2xl font-semibold text-brand-700">{s.k}</div>
            <div className="text-sm text-gray-600">{s.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}