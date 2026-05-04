import React, { createContext, useContext, useReducer } from 'react';

// 1. إنشاء السياق (Context)
const ChessContext = createContext();

// 2. تعريف الحالة الابتدائية
const initialState = {
  fen: 'start',           // الوضعية الحالية للرقعة
  evaluation: 0,         // تقييم المحرك (Stockfish 16)
  moveHistory: [],       // سجل النقلات
  isBrilliant: false,    // هل النقلة الأخيرة عبقرية؟
  gameStatus: 'playing'  // حالة اللعبة (playing, checkmate, draw)
};

// 3. مدير التغييرات (Reducer) للتحكم في تحديث البيانات
function chessReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_MOVE':
      return {
        ...state,
        fen: action.payload.fen,
        moveHistory: [...state.moveHistory, action.payload.move],
        isBrilliant: action.payload.isBrilliant
      };
    case 'SET_EVALUATION':
      return { ...state, evaluation: action.payload };
    case 'RESET_GAME':
      return initialState;
    default:
      return state;
  }
}

// 4. المكون الموفر للحالة (Provider)
export const ChessProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chessReducer, initialState);

  return (
    <ChessContext.Provider value={{ state, dispatch }}>
      {children}
    </ChessContext.Provider>
  );
};

// 5. Hook مخصص لسهولة الاستخدام في المكونات الأخرى
export const useChessStore = () => {
  const context = useContext(ChessContext);
  if (!context) {
    throw new Error('useChessStore must be used within a ChessProvider');
  }
  return context;
};