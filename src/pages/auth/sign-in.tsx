import { UserAuthForm } from "./components/use-auth-form";

export function SignIn() {
  return (
    <div className="lg:p-8">
      <div className="mx-auto flex w-full flex-col justify-center sm:w-[180px] h-[250px]">
        <img width={300} src="/logo-escrow-v2.png" alt="Logo Escrow Dapp" />
      </div>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Get started</h1>
          <h2>
            Connect your wallet to create a new Escrow Account or open an
            existing one
          </h2>
        </div>
        <UserAuthForm />
      </div>
    </div>
  );
}
