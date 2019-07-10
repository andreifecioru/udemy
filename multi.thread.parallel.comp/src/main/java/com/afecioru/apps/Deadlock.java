package com.afecioru.apps;

import java.util.concurrent.locks.ReentrantLock;

public class Deadlock {

    private static class NamedLock extends ReentrantLock {
        private final String name;

        NamedLock(String name) {
            this.name = name;
        }

        @Override
        public String toString() {
            return "Lock(" + name + ")";
        }
    }

    private static class LockingThread extends Thread {
        private final NamedLock lockOne;
        private final NamedLock lockTwo;
        private final String name;

        LockingThread(String name, NamedLock lockOne, NamedLock lockTwo) {
            this.lockOne = lockOne;
            this.lockTwo = lockTwo;
            this.name = name;
        }

        @Override
        public void run() {
            // take 1st lock
            System.out.println("[" + name + "] Locking " + lockOne);
            lockOne.lock();
            System.out.println("[" + name + "] " + lockOne + "locked.");

            try {
                System.out.println("[" + name + "] Processing...");
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            // take 2nd lock
            System.out.println("[" + name + "] Locking " + lockTwo);
            lockTwo.lock();
            System.out.println("[" + name + "] " + lockTwo + "locked.");

            // release both locks
            lockOne.unlock();
            lockTwo.unlock();
        }
    }

    public static void main(String[] args) throws InterruptedException {
        // create 2 locks
        NamedLock lockA = new NamedLock("A");
        NamedLock lockB = new NamedLock("B");

        // create 2 threads accessing the 2 locks in different order
        LockingThread t1 = new LockingThread("TH-1", lockA, lockB);
        LockingThread t2 = new LockingThread("TH-2", lockB, lockA);

        // start the threads
        t1.start();
        t2.start();

        // watch the deadlock
        t1.join();
        t2.join();

        System.out.println("Done.");
    }
}
