import inquirer from "inquirer";

export async function promptInput(message: string): Promise<string> {
  const question :any= {
    type: "input",
    name: "value",
    message,
  };
  const response = await inquirer.prompt(question);
  return response.value;
}