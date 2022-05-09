import java.util.Scanner;

public class main {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.println("Insira o seu nome: \n");

        String nome = input.nextLine();

        System.out.println("Insira o seu e-mail: \n");

        String email = input.nextLine();

        System.out.println("Insira o seu número de telefone: \n");

        String telefone = input.nextLine();

        System.out.println("Insira o seu cargo atual na empresa: \n");

        String cargo = input.nextLine();

        System.out.println("Insira o uma senha: \n");

        String senha = input.nextLine();

        Usuario user = new Usuario(1, nome, email, telefone, cargo, senha);

        String cadastro = user.cadastrarUsuario(nome, email, telefone, cargo, senha);

        System.out.println("Seu nome é: " + user.getNome());
        System.out.println("Seu email é: " + user.getEmail());
        System.out.println("Seu número de telefone é: " + user.getTelefone());
        System.out.println("Seu cargo atual é: " + user.getCargo());
        System.out.println("Sua senha é: " + user.getSenha());

        System.out.print("O seu cadastro foi: " + cadastro);

    }

}
 
