package com.doctorapp.entities;


import java.io.IOException;
import java.net.InetSocketAddress;
import java.net.Socket;

public class NetworkTest {

    public static void main(String[] args) {
        testSMTPConnectivity();
    }

    public static void testSMTPConnectivity() {
        String host = "smtp.gmail.com";
        int port = 587;
        int timeout = 5000; // Timeout in milliseconds

        try (Socket socket = new Socket()) {
            socket.connect(new InetSocketAddress(host, port), timeout);
            System.out.println("SMTP Connectivity Test: Connection successful!");
        } catch (IOException e) {
            System.err.println("SMTP Connectivity Test: Connection failed!");
            e.printStackTrace();
        }
    }
}
