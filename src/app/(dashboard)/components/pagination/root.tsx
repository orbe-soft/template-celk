"use client";

import ReactPaginate, { type ReactPaginateProps } from "react-paginate";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

interface Props extends ReactPaginateProps {}

export function Root({ ...rest }: Props) {
  return (
    <ReactPaginate
      pageRangeDisplayed={1}
      className="flex w-full"
      previousClassName="flex-1"
      nextClassName="flex-1 flex justify-end"
      previousLinkClassName="outline-none aria-disabled:hover:bg-GLOBAL-BRANCO aria-disabled:cursor-not-allowed hover:bg-CINZA-100 transition-all flex w-fit gap-[0.5rem] items-center select-none px-[1rem] text-[0.875rem] text-CINZA-400 font-medium leading-[1.25rem] py-[0.5rem] rounded-[0.5rem] border border-CINZA-200 aria-disabled:text-CINZA-100 aria-disabled:border-CINZA-100"
      nextLinkClassName="outline-none aria-disabled:hover:bg-GLOBAL-BRANCO aria-disabled:cursor-not-allowed hover:bg-CINZA-100 transition-all flex w-fit gap-[0.5rem] items-center select-none px-[1rem] text-[0.875rem] text-CINZA-400 font-medium leading-[1.25rem] py-[0.5rem] rounded-[0.5rem] border border-CINZA-200 aria-disabled:text-CINZA-100 aria-disabled:border-CINZA-100"
      pageLinkClassName="outline-none mr-[0.10rem] hover:bg-CINZA-100 transition-all select-none text-[0.875rem] font-medium leading-[1.25rem] text-CINZA-300 min-w-[2.5rem] h-[2.5rem] rounded-[0.5rem] flex items-center justify-center aria-[current=page]:text-GLOBAL-BRANCO aria-[current=page]:bg-CINZA-300"
      breakLinkClassName="outline-none hover:bg-CINZA-100 transition-all select-none text-[0.875rem] font-medium leading-[1.25rem] text-CINZA-300 min-w-[2.5rem] h-[2.5rem] rounded-[0.5rem] flex items-center justify-center aria-[current=page]:text-GLOBAL-BRANCO aria-[current=page]:bg-CINZA-300"
      previousLabel={
        <>
          <FiArrowLeft />
          Voltar
        </>
      }
      nextLabel={
        <>
          Próximo
          <FiArrowRight />
        </>
      }
      {...rest}
    />
  );
}
