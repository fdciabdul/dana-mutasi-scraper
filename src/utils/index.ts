import inquirer from "inquirer";
/**
 * @author taqin
 * Fungsi untuk meminta input dari pengguna
 * @param message Pesan yang akan ditampilkan kepada pengguna
 * @return { Promise<string> }
 **/ // eslint-disable-next-line no-async-promise-execu
export async function promptInput(message: string): Promise<string> {
  const question :any= {
    type: "input",
    name: "value",
    message,
  };
  const response = await inquirer.prompt(question);
  return response.value;
}