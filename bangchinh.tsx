"use client";

import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "Tôi cảm thấy buồn bã, chán nản",
    options: [
      { text: "Không", score: 0 },
      { text: "Đôi lúc", score: 1 },
      { text: "Nhiều lúc", score: 2 },
      { text: "Rất nhiều", score: 3 },
    ],
  },

  {
    id: 2,
    question: "Tôi cảm thấy nản lòng về tương lai",
    options: [
      { text: "Không", score: 0 },
      { text: "Hơi nản", score: 1 },
      { text: "Rất nản", score: 2 },
      { text: "Tuyệt vọng", score: 3 },
    ],
  },

  {
    id: 3,
    question: "Tôi thấy mình thất bại",
    options: [
      { text: "Không", score: 0 },
      { text: "Ít", score: 1 },
      { text: "Nhiều", score: 2 },
      { text: "Hoàn toàn", score: 3 },
    ],
  },
];

export default function BeckPage() {
  const [step, setStep] = useState(1);

  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    diagnosis: "",
  });

  const [answers, setAnswers] = useState<any>({});

  const totalScore = Object.values(answers).reduce(
    (a: any, b: any) => a + b,
    0
  );

  const getResult = () => {
    if (totalScore <= 13)
      return "Không có trầm cảm";

    if (totalScore <= 19)
      return "Trầm cảm nhẹ";

    if (totalScore <= 29)
      return "Trầm cảm vừa";

    return "Trầm cảm nặng";
  };

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="bg-white shadow p-4 flex items-center gap-4">
        <img
          src="/logo.png"
          className="w-14 h-14"
        />

        <div>
          <h1 className="font-bold text-xl text-blue-900">
            Bệnh viện Quân Y 105
          </h1>

          <p className="text-slate-500 text-sm">
            Thang điểm Beck
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-4">

        {step === 1 && (
          <div className="bg-white rounded-2xl p-6 shadow">

            <h2 className="text-2xl font-bold mb-6">
              Thông tin hành chính
            </h2>

            <div className="grid gap-4">

              <input
                placeholder="Họ tên"
                className="border p-3 rounded-xl"
                onChange={(e) =>
                  setPatient({
                    ...patient,
                    name: e.target.value,
                  })
                }
              />

              <input
                placeholder="Tuổi"
                className="border p-3 rounded-xl"
                onChange={(e) =>
                  setPatient({
                    ...patient,
                    age: e.target.value,
                  })
                }
              />

              <input
                placeholder="Giới tính"
                className="border p-3 rounded-xl"
                onChange={(e) =>
                  setPatient({
                    ...patient,
                    gender: e.target.value,
                  })
                }
              />

              <input
                placeholder="Chẩn đoán"
                className="border p-3 rounded-xl"
                onChange={(e) =>
                  setPatient({
                    ...patient,
                    diagnosis: e.target.value,
                  })
                }
              />

              <button
                onClick={() => setStep(2)}
                className="bg-blue-700 text-white p-4 rounded-2xl font-semibold"
              >
                Bắt đầu làm test
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-6">

            {questions.map((q) => (
              <div
                key={q.id}
                className="bg-white rounded-2xl p-5 shadow"
              >

                <h2 className="font-bold mb-4">
                  {q.id}. {q.question}
                </h2>

                <div className="grid gap-2">
                  {q.options.map((op, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        setAnswers({
                          ...answers,
                          [q.id]: op.score,
                        })
                      }
                      className={`border p-3 rounded-xl text-left ${
                        answers[q.id] === op.score
                          ? "bg-blue-700 text-white"
                          : "bg-white"
                      }`}
                    >
                      {op.text}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <button
              onClick={() => setStep(3)}
              className="bg-green-700 text-white p-4 rounded-2xl font-semibold"
            >
              Xem kết quả
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white rounded-2xl p-6 shadow">

            <h2 className="text-3xl font-bold mb-6">
              Kết quả Beck
            </h2>

            <div className="grid gap-3 text-lg">

              <p>
                <b>Họ tên:</b> {patient.name}
              </p>

              <p>
                <b>Tuổi:</b> {patient.age}
              </p>

              <p>
                <b>Giới:</b> {patient.gender}
              </p>

              <p>
                <b>Chẩn đoán:</b> {patient.diagnosis}
              </p>

              <hr />

              <p>
                <b>Tổng điểm:</b> {totalScore}
              </p>

              <p>
                <b>Đánh giá:</b> {getResult()}
              </p>
            </div>

            <button
              onClick={() => window.print()}
              className="mt-6 bg-blue-700 text-white p-4 rounded-2xl font-semibold w-full"
            >
              In kết quả
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
