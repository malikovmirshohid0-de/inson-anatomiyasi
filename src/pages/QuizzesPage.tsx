import React, { useState } from 'react';
import { QUIZZES_DATA } from '../data/quizzesData';
import { QuizQuestion } from '../types/anatomy';
import confetti from 'canvas-confetti';
import { HelpCircle, CheckCircle, XCircle, Award, RotateCcw, ArrowRight } from 'lucide-react';

interface QuizzesPageProps {
  onOpenIn3D?: (organId: string) => void;
}

export const QuizzesPage: React.FC<QuizzesPageProps> = ({ onOpenIn3D }) => {
  const [level, setLevel] = useState<'boshlangich' | 'chuqurlashtirilgan'>('boshlangich');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const activeQuestions = QUIZZES_DATA.filter((q) => q.level === level);
  const currentQuestion: QuizQuestion | undefined = activeQuestions[currentIndex];

  const handleSelectOption = (option: string) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(option);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);

    if (selectedAnswer === currentQuestion?.correctAnswerUz) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsFinished(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsFinished(false);
  };

  const handleSwitchLevel = (newLevel: 'boshlangich' | 'chuqurlashtirilgan') => {
    setLevel(newLevel);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-24">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">
          <span>Interaktiv Ta'lim</span>
          <span aria-hidden="true">·</span>
          <span>Anatomiya va Tibbiyot Testlari</span>
        </div>
        <h1 className="text-3xl font-bold font-display text-white">Bilim Testlari va Viktorina</h1>
        <p className="text-sm text-slate-400 mt-1">
          Inson tanasi anatomiyasi, organlar faoliyati va tibbiy bilimlaringizni interaktiv tarzda sinab ko'ring.
        </p>
      </div>

      {/* Mode Switcher */}
      <div className="flex items-center gap-2 p-1 bg-slate-900 rounded-xl border border-slate-800 w-fit">
        <button
          onClick={() => handleSwitchLevel('boshlangich')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
            level === 'boshlangich'
              ? 'bg-purple-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Boshlangʻich daraja (Oddiy tushunchalar)
        </button>
        <button
          onClick={() => handleSwitchLevel('chuqurlashtirilgan')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
            level === 'chuqurlashtirilgan'
              ? 'bg-purple-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Chuqurlashtirilgan daraja (Tibbiy bilimlar)
        </button>
      </div>

      {/* Finished Summary Card */}
      {isFinished ? (
        <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-purple-500/20 text-purple-400 mx-auto flex items-center justify-center border border-purple-500/30">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Test muvaffaqiyatli yakunlandi!</h2>
            <p className="text-sm text-slate-400">
              Siz {activeQuestions.length} ta savoldan <strong className="text-purple-400">{score}</strong> tasiga to'g'ri javob berdingiz!
            </p>
            <div className="text-3xl font-extrabold text-white font-mono mt-2">
              {Math.round((score / activeQuestions.length) * 100)}%
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 pt-4">
            <button
              onClick={handleRestartQuiz}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs shadow-md transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Qaytadan boshlash</span>
            </button>
          </div>
        </div>
      ) : currentQuestion ? (
        /* Active Question Card */
        <div className="p-6 md:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
          {/* Progress Header */}
          <div className="flex items-center justify-between text-xs text-slate-400 pb-4 border-b border-slate-800">
            <span className="font-semibold text-purple-400 uppercase tracking-wide">
              {currentQuestion.categoryUz}
            </span>
            <span className="font-mono">
              Savol {currentIndex + 1} / {activeQuestions.length}
            </span>
          </div>

          {/* Question Text */}
          <h2 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
            {currentQuestion.questionUz}
          </h2>

          {/* Options List */}
          {currentQuestion.optionsUz && (
            <div className="space-y-3">
              {currentQuestion.optionsUz.map((opt, i) => {
                const isSelected = selectedAnswer === opt;
                let optionStyle = 'bg-slate-950/60 hover:bg-slate-800 border-slate-800 text-slate-200';

                if (isAnswerSubmitted) {
                  if (opt === currentQuestion.correctAnswerUz) {
                    optionStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-semibold';
                  } else if (isSelected) {
                    optionStyle = 'bg-rose-950/60 border-rose-500 text-rose-200';
                  } else {
                    optionStyle = 'bg-slate-950/40 border-slate-800/60 text-slate-500 opacity-60';
                  }
                } else if (isSelected) {
                  optionStyle = 'bg-purple-950/60 border-purple-500 text-purple-200 font-semibold ring-1 ring-purple-500';
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt)}
                    disabled={isAnswerSubmitted}
                    className={`w-full flex items-center justify-between p-4 rounded-xl text-left border transition-all text-xs sm:text-sm cursor-pointer ${optionStyle}`}
                  >
                    <span>{opt}</span>
                    {isAnswerSubmitted && opt === currentQuestion.correctAnswerUz && (
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />
                    )}
                    {isAnswerSubmitted && isSelected && opt !== currentQuestion.correctAnswerUz && (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* Identification in 3D Hint */}
          {currentQuestion.type === 'identify_organ' && currentQuestion.targetOrganId && (
            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 flex items-center justify-between">
              <span className="text-xs text-cyan-200">
                Ushbu a'zoni 3D modelda bevosita topib o'rganishingiz mumkin:
              </span>
              <button
                onClick={() => onOpenIn3D?.(currentQuestion.targetOrganId!)}
                className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors shrink-0 ml-2"
              >
                3D Koʻrish
              </button>
            </div>
          )}

          {/* Detailed Scientific Explanation Box (after answering) */}
          {isAnswerSubmitted && (
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 animate-in fade-in duration-200">
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 block">
                Ilmiy tushuntirish:
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentQuestion.explanationUz}
              </p>
            </div>
          )}

          {/* Action Button */}
          <div className="flex items-center justify-end pt-4 border-t border-slate-800">
            {!isAnswerSubmitted ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={!selectedAnswer}
                className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-xs shadow-md transition-all cursor-pointer"
              >
                Javobni tasdiqlash
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
              >
                <span>Keyingi savol</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};
