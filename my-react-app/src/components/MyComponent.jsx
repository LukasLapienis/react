import * as React from 'react';

function Header() {
  return (
    <header className="flex gap-5 justify-between mt-56 w-full text-xs tracking-tight leading-4 max-md:mt-10">
      <div className="flex gap-1 text-blue-600 whitespace-nowrap">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9146dd114e630f6c49f50e4d3e39b2289c28eb54c23cdf065cb25e7f76693a7?apiKey=af91ccae9a0b4e0d8f9dd170c1cf10e0&"
          alt="Twitter logo"
          className="shrink-0 w-6 aspect-square"
        />
        <div className="my-auto">@uiunicorn</div>
      </div>
      <div className="my-auto text-stone-500">© Perfect Login 2021</div>
    </header>
  );
}

function LoginForm() {
  return (
    <form className="flex flex-col grow justify-between self-stretch p-12 w-full bg-white max-md:px-5 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/12d139ef0fe2763da2296977a22c41ae173d3e79e04cffc412db94874afae18f?apiKey=af91ccae9a0b4e0d8f9dd170c1cf10e0&"
        alt="Company logo"
        className="max-w-full aspect-[3.13] w-[149px]"
      />
      <h1 className="mt-12 text-xl font-semibold leading-7 text-zinc-900 max-md:mt-10">
        Nice to see you again
      </h1>
      <label
        htmlFor="email"
        className="mx-4 mt-6 text-xs tracking-wide leading-3 text-zinc-800 max-md:mx-2.5"
      >
        Login
      </label>
      <input
        type="text"
        id="email"
        placeholder="Email or phone number"
        className="justify-center items-start px-4 py-3.5 mt-2 text-base leading-5 rounded-md border border-solid bg-zinc-100 border-neutral-200 text-zinc-500 max-md:pr-5"
      />
      <label
        htmlFor="password"
        className="mx-4 mt-4 text-xs tracking-wide leading-3 text-zinc-800 max-md:mx-2.5"
      >
        Password
      </label>
      <div className="flex flex-col justify-center mt-2 w-full text-base leading-5 rounded-md border border-solid bg-zinc-100 border-neutral-200 text-zinc-500">
        <div className="flex gap-5 justify-between py-2 pr-2 pl-4 rounded-md">
          <input type="password" id="password" placeholder="Enter password" />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eda405d21806bc6ee234dd8a29bb09ee94e7583a49d45c5d00c81ef2ab3682e6?apiKey=af91ccae9a0b4e0d8f9dd170c1cf10e0&"
            alt="Eye icon"
            className="shrink-0 my-auto w-4 aspect-square"
          />
        </div>
      </div>
      <div className="flex gap-4 mt-5">
        <div className="flex flex-1 gap-2">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center py-0.5 border border-solid bg-zinc-100 border-neutral-200 rounded-[36.5px]">
              <div className="shrink-0 h-4 bg-white rounded-xl shadow-sm" />
            </div>
          </div>
          <label
            htmlFor="rememberMe"
            className="flex-1 text-xs tracking-wide leading-5 text-zinc-900"
          >
            Remember me
          </label>
          <input type="checkbox" id="rememberMe" className="sr-only" />
        </div>
        <a
          href="#"
          className="flex-1 text-xs tracking-wide leading-5 text-right text-blue-600"
        >
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        className="justify-center items-center px-6 py-2.5 mt-8 text-base font-bold tracking-wide leading-5 text-center text-white bg-blue-600 rounded-md max-md:px-5"
      >
        Sign in
      </button>
      <button
        type="button"
        className="flex justify-center items-center px-4 py-2.5 mt-16 w-full text-xs tracking-wide leading-5 text-center text-white rounded-md bg-zinc-800 max-md:px-5 max-md:mt-10"
      >
        <div className="flex gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/afce5f5675cf9cf98f399ce281f90aedc82e425dc343d72347e7c3a7797a15a5?apiKey=af91ccae9a0b4e0d8f9dd170c1cf10e0&"
            alt="Google logo"
            className="shrink-0 w-5 aspect-square"
          />
          <span>Or sign in with Google</span>
        </div>
      </button>
      <div className="flex gap-2 self-center mt-6 text-xs tracking-wide leading-5">
        <div className="text-zinc-900">Don't have an account?</div>
        <a href="#" className="text-right text-blue-600">
          Sign up now
        </a>
      </div>
      <Header />
    </form>
  );
}

function MyComponent() {
  return (
    <div className="flex flex-col justify-center bg-white rounded-3xl">
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
            <div className="overflow-hidden relative flex-col grow items-start self-stretch px-12 pb-12 text-xs tracking-tight leading-4 text-white underline min-h-[900px] pt-[839px] max-md:px-5 max-md:pt-10 max-md:max-w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a66c26b368d7a9c8d2c47227548434fbb6864d4523f39787f2ab020441e0e2f?apiKey=af91ccae9a0b4e0d8f9dd170c1cf10e0&"
                alt="Background image"
                className="object-cover absolute inset-0 size-full"
              />
              <span className="text-white">Photo by </span>
              <a
                href="https://unsplash.com/@irrabagon"
                className="text-white underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alexandr Popadin
              </a>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
