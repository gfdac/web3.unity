# Contribution Guide for web3.unity

Welcome to the web3.unity project! We appreciate your interest in contributing to this open-source SDK, designed to facilitate the integration of web3 features into Unity-based video games. This guide will provide you with all the essential information you need to make meaningful contributions to our project.

## Getting Started

1. **Fork the Repository**: Start by forking the [web3.unity repository](https://github.com/ChainSafe/web3.unity) on GitHub.
2. **Clone the Fork**: Next, clone your forked repository to your local machine.


## Setting Up the Development Environment

### macOS
**Note:If you're building the project for iOS, you have to install Xcode.**

1. **Install Unity**: Install Unity Hub by downloading it from Unity's official website.

2. **Install Homebrew**: Install Homebrew using the following Terminal command:

    ```
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

3. **Install .NET SDK**: Install .NET trough homebrew

    ```
    brew install --cask dotnet-sdk
    ```
    This will install the latest .NET SDK to your machine.

### Linux

 1. **Install Unity**: Follow the instructions for your Linux distribution on the Unity website.

 2. **Install .NET SDK**:  If you're using Debian-based Linux Distro (i.e. Debian itself,Ubuntu,Linux Mint, etc) Use the following Terminal command to install the .NET SDK:

    ```
    sudo apt-get install dotnet-sdk-7.0
    ```
    For non-Debian Linux Flavors, please follow the following [link](https://learn.microsoft.com/en-us/dotnet/core/install/linux) to learn more about how to install the .NET SDK into your operating system.

### Windows

1. **Download Unity**: Download and install Unity Hub from the Unity website.
2. **Download .NET SDK**: Download and install the .NET SDK from the Microsoft website.

## Opening The Project
Project is divided into two solutions. First solution is Chainsafe.Gaming which is the core of our SDK. There is located our famous Web3 class, which is the core of the communication with blockchain.
Second Solution is the one inside of the UnitySampleProject. 
That Project contains a lot of Unity-Specific code that helps facilitate our Chainsfae.Gaming in the Unity environment.
UnitySampleProject also contains a lot of different packages, that are dependent on the core web3.unity one, like web3auth, lootboxes and ramp.

## Deciding where to write the code
Because of the fact that we have two projects, developers can often times be confused by in which project should they start writing the code. 
General rule of thumb:
1. If your code will directly use some of the Unity features, it should probably live inside of the UnitySampleProject. 
Note: If you want to add a new module (like web3auth, ramp or lootboxes), you should create a new package inside of the Root of the repositories Packages folder.
2. If your code doesn't care much about Unity, but is doing a lot of communication with blockchain itself, you should definitely create a new csproj inside of our Chainsafe.Gaming solution. 

If you're unsure how you would acutaully extend Chainsafes SDK, take a look at this lengthy [video](https://youtu.be/D6_786zPva8). It shows in depth how you can add your own code and injectors to the Chainsafe.Gaming project.


## Contributing Code

1. **Create a New Branch**: Create a new branch for your contribution using the command `git checkout -b my-contribution`.
2. **Make Improvements**: Implement the necessary changes and improvements in the codebase.
3. **Adhere to Guidelines**: Ensure that your code follows the project's coding conventions and guidelines.
4. **Write Tests**: Write unit tests for your code and ensure that all existing tests pass.
5. **Commit Changes**: Commit your changes with a descriptive commit message using `git commit -m "Add feature X"`.
6. **Push to Your Fork**: Push your changes to your forked repository with `git push origin my-contribution`.
7. **Submit a Pull Request**: Finally, submit a pull request to the main web3.unity repository.

## Reporting Issues

If you come across any bugs, have suggestions, or want to request new features, please submit an issue on the [GitHub issue tracker](https://github.com/ChainSafe/web3.unity/issues). When submitting an issue, provide comprehensive details, including steps to reproduce the problem and relevant code snippets.

## Collaboration and Communication

We encourage collaboration and discussion among contributors. Join our community on Discord to connect with fellow developers, ask questions, and share ideas. Additionally, we have various communication channels, both synchronous and asynchronous, to coordinate project-related discussions.


## Dealing with Forks

When contributing to web3.unity, it's advisable to fork the main repository and make your changes in your forked repository. This allows you to work independently on your changes and submit a pull request when you're ready.

To fork the web3.unity repository:

1. Go to the [web3.unity repository](https://github.com/ChainSafe/web3.unity) on GitHub.
2. Click the "Fork" button in the top-right corner of the page.
3. Select your GitHub account as the destination to fork the repository.

## Proposing New Changes

If you don't know how to write a certain feature, but have an idea about it, follow these steps:

1. **Create an Issue**: Create a new issue on the [GitHub issue tracker](https://github.com/ChainSafe/web3.unity/issues).
2. **Provide Details**: Provide a detailed description of your proposed changes, including any design or implementation considerations.
3. **Engage in Discussion**: Engage with the community and maintainers to refine and validate your proposal.


Thank you for contributing to web3.unity. Together, we'll make it an even better SDK for Unity-based video games, empowering developers to seamlessly integrate web3 features into their projects!